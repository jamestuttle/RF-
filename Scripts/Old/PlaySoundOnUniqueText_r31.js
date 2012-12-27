// WillCallRequest.js
// Written by Naurtech Support for Case 12842
// Updated by Naurtech Support for Case 12868 - 2/11/2010.
// Updated by Naurtech Support for Case 16516 - 9/24/2010.
//   - Play alarm5.wav file from \System folder as it is non-volatile

function OnSessionReceive( session, count )
{
    try
    {
        // session is the active session
	    
	    // Get the line of text. 
        var line = CETerm.Session(session).Screen.GetTextLine( 7 );

        // Look for some special unique text on this line
        // Do a regular expression case-insensitive match
        if (line.match( /1=Accept/i ))
        {                
            // Play a WAV file if text is found
            OS.PlaySound("\\System\\alarm5.wav", 0);

            // Skip message notification if the text is on the active session
            if (session != CETerm.ActiveSession)
            {
                OS.Alert( "Will Call Request on Session: " + session );
            }
        }
        
        var line3 = CETerm.Session(session).Screen.GetTextLine( 3 );
        if (line3.match(/CMONMSGRF/i))
        {                
            // Play a WAV file if text is found
            OS.PlaySound("\\System\\alarm5.wav", 0);
		}        
    }
    catch (e) {}
}
