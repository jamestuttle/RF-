// 629 SystemAlarm_NC15281.js
// Written by Naurtech Support for Case 15281

var timeCheckTimer = null;

function TimeCheckAction()
{
    // Cancel timer if running
    if (timeCheckTimer)
    {
        CETerm.ClearTimeout( timeCheckTimer );
        timeCheckTimer = null;
    }

    // Get current time
    var now = new Date();

    // Create alarm time
    var alarm = new Date( now.getTime() );
    alarm.setHours( 18, 29, 0, 0 );   // Alarm time 18:29

    // Check if before or after alarm time
    var delta = alarm.getTime() - now.getTime();
    if ( delta > 10000)
    {
        // Alarm is more than 10 seconds in the future
        // Set new timer
        CETerm.SetTimeout( "TimeCheckAction()", delta );
    }
    else
    {
        if (delta > -10000)
        {
			// Play sound also
	   		OS.PlaySound("\\System\\alarm5.wav", 0);
			 OS.Sleep( 2000 ); // 2000 milliseconds
            // Alarm is within +/- 10 seconds
            OS.Alert( "System Log off in 2 minutes." );
        }

        // Set new timer for next alert, 2 minutes ahead
        CETerm.SetTimeout( "TimeCheckAction()", 2 * 60 * 1000 );
    }
}

// Initial timer invoke
TimeCheckAction();

