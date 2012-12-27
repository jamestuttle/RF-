// WillCallRequest.js
// Written by Naurtech Support for Case 12842
// Updated by Naurtech Support for Case 12868 - 2/11/2010.
//   - Play alarm5.wav file from \System folder as it is non-volatile
//
// created for playing the alaram5 when a Interupt ALL USER
// Message comes through oon the RF Guns
// JAMES T 09/24/2010

function OnSessionReceive( session, count )
{
    try
    {
        // Get the line of text. 
        var line = CETerm.Session(session).Screen.GetTextLine( 3 );

        // Look for some special unique text on this line
        // Do a regular expression case-insensitive match
        if (line.match( /CMONMSGRF/i ))
        {                
            // Play a WAV file if text is found
            OS.PlaySound("\\System\\alarm5.wav", 0);

            // Skip message notification if the text is on the active session
            //if (session != CETerm.ActiveSession)
           // {
           //     OS.Alert( "Will Call Request on Session: " + session );
           // }
        }
    }
    catch (e) {}
}
