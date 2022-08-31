import { Modal, useMantineTheme } from '@mantine/core';
// @mantine/core

function ProfileModel({modelOpened, setModelOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {modelOpened}
      onClose = {()=>setModelOpened(false)}
    >
      <form className='infoForm'>
        <h3>Your Info</h3>
      </form>
    </Modal>
  );
}

export default ProfileModel;