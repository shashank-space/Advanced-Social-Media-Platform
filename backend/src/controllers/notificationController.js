import Notification from "../models/Notification.js";

// Get Notifications
export const getNotifications = async (req, res) => {
  try {

    const notifications = await Notification.find({
      receiver: req.user.id,
    })
      .populate("sender", "username avatar")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      notifications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Mark Notification as Read
export const markAsRead = async (req, res) => {

  try {

    const notification = await Notification.findById(
      req.params.id
    );

    if (!notification) {

      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });

    }

    notification.isRead = true;

    await notification.save();

    res.json({
      success: true,
      notification,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Delete Notification
export const deleteNotification = async (req, res) => {

  try {

    await Notification.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Notification Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};