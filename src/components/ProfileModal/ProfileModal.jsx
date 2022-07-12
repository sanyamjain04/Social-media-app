import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm ">
        <h3>your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Lives In"
          />
        </div>
        <div>
          Profile Image
          <input type="file"  name="profileImg" />
          Cover Image
          <input type="file"  name="coverImg" />
        </div>
        <button className="btn info-btn">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
