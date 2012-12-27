function OnSessionReceive(currentSession, count)
{
    // -----------------------------------------------------------   
    // This script looks for a special text on the screen of emulation
    // session S1 and then plays a WAV file if the text is found.  
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
    
    //
    // Get the right session in which you want to look for the text
    // Loop through all five sessions to look for the unique text.
    //
    for (var sessNDX = 1; sessNDX <=5; sessNDX++)
    {
        //
        // Text can be received only for connected sessions
        //
        if (CETerm.Session(sessNDX).IsConnected)
        {
            // Get the line of text. 
            // TODO: Change the parameter in this call 
            // to select the line on the screen where the unique text appears
            //
            var line = CETerm.Session(sessNDX).Screen.GetTextLine( 7 );

            //
            // Look for some special unique text on this line
            // Do a regular expression case-insensitive match
            // TODO: Change the match text in between "/" and "/" to suit your
            // requirements
            //
            if (line.match( /1=Accept/i ))
            {
	                      
                
                // Play a WAV file if text is found
                // TODO: Change the file name and path to play a different WAV
                // file. Make sure that the WAV file exists on the device
                OS.PlaySound("\\Windows\\alarm5.wav", 0);

 		// Test to alert user what session on the CE. 
		OS.Alert( "Will Call Request on Session: " + sessNDX );
            }
        }
    }
}
