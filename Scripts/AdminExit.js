// Naurtech Support, Case 8898
var adminpassword = "soti";
function AdminExit()
{
    var ti = CETerm.TextInput;
    ti.PasswordMode = true;
    ti.Prompt = "Enter password:";
    ti.Title = "Administrator Exit";
    ti.Input = "";
    var r = ti.GetInput();
    if (r === 1 && ti.Input === adminpassword)
    {
        CETerm.PostIDA( "IDA_PROGRAM_EXITSILENT", 0 );
    }
}

AdminExit();
// End of script
