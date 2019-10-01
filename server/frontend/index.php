<?php
$attendees = [
    [ "name" => "Joe Smith",
    "email" => "joe@smith.com"],

    [ "name" => "Bob Tailor",
    "email" => "bob@tailor.com"],
    
    [ "name" => "Andrew Marvell",
    "email" => "andrew@marvell.com"],

];
?>

<html>
    <head>
        <meta name="viewport" content="width=device-width" />
        <title>Ticket Generator</title>

        <link rel="shortcut icon" type="image/png" href="/images/favicon.png">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/style.css">

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        <script>
            function AttendeeClicked(email) {
                console.log("Attendee with the email " + email + " was chosen");
                fetch('https://url-of-api-endpoint')
                .then(response => {
                    console.log("API response " + response);
                });
            }
        </script>


        <!-- Created by Joshua Heng - www.joshheng.co.uk -->
    </head>
    <body>
        <header>

            <h1>Ticket Generator - Attendees</h1>
        </header>
        <main>
            <em>Please select your name below</em>
            <hr>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                <?php
                    foreach ($attendees as $attendee) {
                        echo("<tr>".
                        "<td>".$attendee["name"]."</td>".
                        "<td>".$attendee["email"]."</td>".
                        '<td><button type="button" class="btn btn-primary" onclick="AttendeeClicked(\''.$attendee["email"].'\')">Choose</button</td>');
                    }
                ?>
            </table>

        </main>

        <footer class="container-fluid">
            <div class="row">
                <div class="col-sm">
                    Ticket Generator
                </div>
                <div class="col-sm">
                    
                </div>
                <div class="col-sm">
                    Copyright 2019
                </div>
            </div>
        </footer>
    </body>
</html>