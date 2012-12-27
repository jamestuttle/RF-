// VinylReminder V0.3
// Modified by Naurtech Support Case 8993

// NAURTECH: OnSessionReceive is invoked by *each* connected session
// NAURTECH: whenever data is received by that session.  This handler
// NAURTECH: runs even if the session is not the active session.

function OnSessionReceive( session, count )
{
    // -----------------------------------------------------------   
    // This script looks for a special text on the screen of emulation
    // for all.  
    //
    // TODO: You can change the session in which you would like to
    //       look the text
    //
    // TODO: You can change the text string to look for. Presently
    //       this script does a case independent text match
    //
    // TODO: You can change the WAV file to play once a successful
    //       text match is detected. Make sure that the WAV file
    //       exists on the specified file path
    // ----------------------------------------------------------- 
    

// NAURTECH: Only look at session that just received data.  Do not
// NAURTECH: loop through all sessions.  Unconnected sessions will
// NAURTECH: never fire this handler.  Each connected session
// NAURTECH: will cause the alert for that session if the text is
// NAURTECH: received.

    // Get the line of text. 
    // TODO: Change the parameter in this call 
    // to select the line on the screen where the unique text appears
    //
    var line3 = CETerm.Session(session).Screen.GetTextLine( 3 )
    var line14 = CETerm.Session(session).Screen.GetTextLine( 14 );

    //
    // Look for some special unique text on this line
    // Do a regular expression case-insensitive match
    // TODO: Change the match text in between "/" and "/" to suit your
    // requirements
    //
// NAURTECH: Fixed logic.  Make sure line values are not null.
    if (line3 && line14 &&
        line3.match( /Consolidation/i) &&
        line14.match( /Not same route/i ) || line14.match( /Order not found/i )) 
    {               
        // Play a WAV file if text is found
        // TODO: Change the file name and path to play a different WAV
        // file. Make sure that the WAV file exists on the device
        OS.PlaySound("\\Windows\\alarm5.wav", 0);


        // Show message notification if the text is not the active session

        if (session = CETerm.ActiveSession)
        {
            OS.Alert( "Please check order, did not process scan... " );
            
            
            // NAURTECH: Automatically switch to the alert session.
            // TODO: Uncomment next line to auto switch
            //CETerm.PostIDA("IDA_SESSION_S" + session, 0 );
        }
    }
}
