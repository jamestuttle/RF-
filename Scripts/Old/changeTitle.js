/* OnSessionSwitch */
// Change Window title text when a session is switched. This
// script should be used along with RestoreTitle.js script
// Case 8911
function OnSessionSwitch(session, previousSession)
{
    var selfHwnd = OS.Window.GetSelf();

    // If required, you can get the window title text
    // var orgTitle = OS.Window.GetText(selfHwnd);
    // OS.Alert(orgTitle);

    // And Save the original title in a user string. userstring64 is
    // used in this example. Any prior user text in this location will 
    // be overwritten
    // You can change this to any other user text string location
    // CETerm.SetProperty("app.usertext.64", orgTitle);


    // Change the title text strings as required. These are in
    // listed order for Session 1 through Session 5
    // TODO: Change these to the Device Name configuration settings for
    // your configured sessions. Set this to "" if the session is not 
    // configured or you do not want to change its title
    // 
    var newTitle = ["Title1", "Title2", "Title3", "Title4", "Title5"];
    // OS.Alert(newTitle[session -1]);

    // Post a SetText message to the window to change its title only if 
    // there is a valid title string
    if (newTitle[session -1] != "")
    {    
        OS.Window.SendMessage(selfHwnd, 0x000C, 0, newTitle[session -1]);
    }
    
    return 0;
}

