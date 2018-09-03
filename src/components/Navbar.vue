<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Account App</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item router-link to="/home">Home</b-nav-item>
                    <b-nav-item-dropdown text="Accounts" right>
                        <router-link to="/account">Add Account</router-link>
                        <br>
                        <router-link to="/getaccount">Get Account</router-link>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
