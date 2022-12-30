const Product = require("../models/Product");
const catchAsyncError = require("../middleware/catchAsyncError");
const cloudinary = require("../utils/cloudinary");

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const { name, description, price, category, image } = req.body;

  if (!name || !description || !price || !category || !image) {
    return res.status(204).json({
      error: " Please enter vaild details for product",
    });
  }

  if (image) {
    const uploadRes = await cloudinary.uploader.upload(image, {
      folder:"iStore",
      upload_preset: "iStore",
    });
    if (uploadRes) {
      const product = await Product.create({
        name,
        description,
        price,
        category,
        image: uploadRes.secure_url
      });

      res.status(201).json({
        message: "Product created successfully",
        product,
      });
    }
  }
});

exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    message: "Product Fetch successfully",
    product,
  });
});

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  const productexist = await Product.findById(req.params.id);

  if (!productexist) {
    return res.status(404).json({
      error: "Product not found",
      product,
    });
  }

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: "Product update successfully",
    product,
  });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
      product,
    }) 
  }
  res.status(200).json({
    message: "Product delete successfully",
    product,
  });
});

exports.ProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
      product,
    });
  }
  res.status(200).json({
    message: "Fetch Product Details successfully",
    product,
  });
});

exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReview = await Product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReview) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});
