import * as React from "react";
// import Home from "./components/layout/Home";
import theme from "./styles/extendTheme";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "pages/Login";
import Header from "components/Header";
import { HeaderRouter } from "components/Header/Header";
import SignUp from "pages/Signup";
import Recipe from "pages/Recipe/RecipeCard";
import RecipeMap from "pages/Recipe/RecipeMap";
import AllRecipesPage from "pages/Recipe/AllRecipesPage";
import AuthorRecipesPage from "pages/Recipe/AuthorRecipesPage";
import LikedRecipesPage from "pages/Recipe/LikedRecipesPage";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <Box backgroundColor="bg" h="auto">
      <Container maxW="1000px" minH="95%"
        display="flex" 
        paddingX="0px" paddingY="30px"  
        alignSelf="center" justifyContent="center"
        textStyle="body"
      >
        <Routing />
      </Container>
    </Box>
  );
};

function Routing() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllRecipesPage/>}/>
      <Route path="/me/likes" element={<LikedRecipesPage/>}/>
      <Route path="/me/recipes" element={<AuthorRecipesPage/>}/>

      <Route path="/auth/signin" element={<Login/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>

      {/* <Route path="/recipes/:id" element={<RecipeMap />}/> */}

      {/* ! id={1} author={'admin'} 
      title={'Тест 1001'} created_at={'12.12.2000'} description={'no'}
      duration={5} portion_num={1} */}

      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
}

function NotFound () {
  return <h1>Page not Found</h1>
}

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderRouter/>
      <Home />
    </ChakraProvider>
  )
};
