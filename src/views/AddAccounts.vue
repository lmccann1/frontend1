<!DOCTYPE html>
<html lang="en">
<head>
    <title>Add Accounts</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<div id="app">
<div class="container">
    <h2>Add Account</h2>
    <form action="">
        <div class="form-group">
            <label for="firstname">First name</label>
  <input type="text" class="form-control" id="fname" placeholder="Enter firstname" name="firstname">
        </div>
        <div class="form-group">
            <label for="secondname">Second name:</label>
<input type="text" class="form-control" id="sname" placeholder="Enter secondname" name="secondname">
        </div>
        <div class="form-group">
            <label for="accountNumber">Account number:</label>
            <input type="text" class="form-control" id="sname" placeholder="Enter secondname" name="secondname">
        </div>
        <button type="submit" class="btn btn-default" align="right">Submit</button>
    </form>
</div>
</div>
</body>
</html>


<script>
// @ is an alias to /src
// import HomePage from '@/components/HomePage.vue';

var app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    secondName: '',


  }
});

// export default {
//  name: 'home',
  // components: {
  // HomePage,
  // },
// };

</script>
