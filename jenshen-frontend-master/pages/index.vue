 <!--template>
  <Tutorial/>
 </template> -->

<template>
  <header>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="white" container>
      <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active>
          Home
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          Features
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          Pricing
        </MDBNavbarItem>
        <MDBNavbarItem to="#">
          About
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>
    <!-- Navbar -->
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light">
      <h1 class="mb-3">Heading</h1>
      <h4 class="mb-3">Subheading</h4>
      <a class="btn btn-primary" href="" role="button"
        >Call to action</a
      >
    </div>
    <!-- Jumbotron -->
  </header>
</template>


<script>
// export default {
//   name: 'IndexPage'
// }
  import { MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem
    },
  };
</script>
