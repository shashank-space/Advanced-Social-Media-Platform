import MainLayout from "../../layouts/MainLayout";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import EditProfileModal from "../../components/profile/EditProfile";

export default function Profile() {
  const user = {
    name: "Shashank",
    username: "shashank",
    bio: "MERN Stack Developer",
  };

  return (
    <MainLayout>

      <ProfileHeader user={user} />

      <ProfileStats
        posts={25}
        followers={120}
        following={85}
      />

      <EditProfileModal />

    </MainLayout>
  );
}