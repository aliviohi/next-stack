import type { BaseEntity } from '../../types/common';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification extends BaseEntity {
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  userId: string;
  actionUrl?: string;
  expiresAt?: string;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  inApp: boolean;
  types: {
    info: boolean;
    success: boolean;
    warning: boolean;
    error: boolean;
  };
}

export interface CreateNotificationRequest {
  title: string;
  message: string;
  type: NotificationType;
  userId: string;
  actionUrl?: string;
  expiresAt?: string;
}

export interface MarkAsReadRequest {
  notificationId: string;
  userId: string;
}
