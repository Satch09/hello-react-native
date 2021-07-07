import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListItems from "./src/screens/ListItems";
import ImageScreen from "./src/screens/ImageScreen";
import ColourScreen from "./src/screens/ColourScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListItems,
    Images: ImageScreen,
    // Colours: ColourScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
