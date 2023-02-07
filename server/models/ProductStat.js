import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: [true, "Product ID is required"],
      trim: true,
    },
    yearlySalesTotal: {
      type: Number,
      required: [true, "Yearly sales total is required"],
      min: [0, "Yearly sales total must be a positive number"],
    },
    yearlyTotalSoldUnits: {
      type: Number,
      required: [true, "Yearly total sold units is required"],
      min: [0, "Yearly total sold units must be a positive number"],
    },
    year: {
      type: Number,
      // required: [true, "Year is required"],
      min: [1000, "Year must be a 4-digit number"],
      max: [9999, "Year must be a 4-digit number"],
    },
    monthlyData: [
      {
        month: {
          type: String,
          required: [true, "Month is required"],
        },
        totalSales: {
          type: Number,
          // required: [true, "Monthly sales total is required"],
          min: [0, "Monthly sales total must be a positive number"],
        },
        totalUnits: {
          type: Number,
          // required: [true, "Monthly total sold units is required"],
          min: [0, "Monthly total sold units must be a positive number"],
        },
      },
    ],
    dailyData: {
      date: {
        type: String,
        // required: [true, "Date is required"],
      },
      totalSales: {
        type: Number,
        // required: [true, "Daily sales total is required"],
        min: [0, "Daily sales total must be a positive number"],
      },
      totalUnits: {
        type: Number,
        // required: [true, "Daily total sold units is required"],
        min: [0, "Daily total sold units must be a positive number"],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductStat", ProductStatSchema);
