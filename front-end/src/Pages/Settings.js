//importing components
import {
  EditNameWidget,
  EditEmailWidget,
  ChangePasswordWidget,
  EditAvatarWidget,

} from '../SettingsComponent/SettingsIndex'

const Settings = () => {
    return (
      <div className='settings'>
        <h3>General Account Settings</h3>
        <EditNameWidget />
        <EditEmailWidget />
        <ChangePasswordWidget />
        <EditAvatarWidget />
      </div>
    )
  };
  
  export default Settings;