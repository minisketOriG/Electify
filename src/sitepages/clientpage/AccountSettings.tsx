
import NavigationPanel from '../../components/PageComponents/NavigationPanel'
import PageHeader from '../../components/PageComponents/PageHeader'
import UserAccountNameSetting from '../../components/PageComponents/UserAccountNameSetting'
import UserAccountPasswordSettings from '../../components/PageComponents/UserAccountPasswordSettings'
import UserAvatarSetiing from '../../components/PageComponents/UserAvatarSetiing'

const AccountSettings = () => {

  
  return (
    <>
      <div className="flex justify-center flex-col w-full h-screen">
        <PageHeader type="clientPage" />

        <main className="flex-1 justify-center items-center overflow-y-scroll">
          <div className="flex justify-center flex-row w-full h-full overflow-y-scroll">
            <NavigationPanel type="accountsettings" />

            <div className="w-full h-auto p-10">
              <h1 className="text-black font-poppins font-semibold text-[14px]">Account Settings</h1>
              <hr className="my-2" />

              <section className="w-full pb-10">
                <UserAvatarSetiing />

                <UserAccountNameSetting />

                <UserAccountPasswordSettings />
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default AccountSettings