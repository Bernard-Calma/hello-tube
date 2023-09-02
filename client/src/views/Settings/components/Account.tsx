import "../Styles.css"

const Account = () => <div className="accountSection">
    <div>
        <p className="bold">Account</p>
        <h2>Choose how you appear and what you see on HelloTube</h2>
        <p>Signed in as bernard_calma@email.com</p> 
    </div>

    <div className="channel">
        <h3 className="bold">Your HelloTube Channel</h3>
        <p>This is your publick presence on HelloTube. You need a channgel to upload your own videos, comment on videos or create playlists.</p>
        <div>
            <p className="bold">Your channel</p>
            <div className="subDiv">
            <p className="user">Bernard Calma</p>
                <p className="blue bold">Channel status and features</p>
                <p className="blue bold">Add or manage your channel(s)</p>
                <p className="blue bold">View advanced settings</p>
            </div>
        </div>
    </div>

    <div className="account">
        <h3>Your Account</h3>
        <p>You sign it to HelloTube with your email</p>
        <div>
            <p className="bold">Google Account</p>
            <div className="subDiv subDivAccount">
                <p className="blue bold">View or change your Email Account settings</p>
                <p>You will be redirected to your Email Account page</p>
            </div>
            
        </div>
        <div>
            <p className="bold">Membership</p>
            <div className="subDiv subDivAccount">
                <p>No Membership</p>
                <p className="blue bold">Get HelloTube Premium</p>
                <p>HelloTube Premium offers uninterupted music, ad-free videos and more....</p> 
            </div>
          </div>
      </div>
</div>

export default Account;