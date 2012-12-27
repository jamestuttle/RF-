/* OnProgramExit */
// Restore the Window title text. This script should be used along 
// with ChangeTitle.js script
// Case 8911
function OnProgramExit()
{
    // Retrieve the original saved title. 
    // var orgTitle = CETerm.GetProperty("app.usertext.64");

    // If it was not saved or the user has switched to a different session
    // then assign a proper window title before exiting
    orgTitle = CETerm.GetProperty("app.name") + " - S" + CETerm.ActiveSession;
    //OS.Alert(orgTitle);
    
    var selfHwnd = OS.Window.GetSelf();

   // Post a SetText message to the window to change its title back to the original
   OS.Window.SendMessage(selfHwnd, 0x000C, 0, orgTitle);

   // To indicate that event handled correctly
   return 0;
}
