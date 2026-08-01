import MainLayout from "../../layouts/MainLayout";

import AccountSettings from "../../components/settings/AccountSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import AppearanceSettings from "../../components/settings/AppearanceSettings";

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <AccountSettings />
        <PrivacySettings />
        <NotificationSettings />
        <AppearanceSettings />
      </div>
    </MainLayout>
  );
}