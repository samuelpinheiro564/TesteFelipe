import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import SphereSoluctions from "../screens/SphereSoluctions";
import pesquisarMaqs from "../screens/pesquisarMaqs";
import PesquisarEmps from "../screens/PesquisarEmps";
import CadastrarMaqs from "../screens/CadastrarMaqs";
import CadastrarEmps from "../screens/CadastrarEmps";
import Dicas from "../screens/Dicas";


const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="SphereSoluctions" component={SphereSoluctions} />
    <Stack.Screen name="Dicas" component={Dicas} />
      <Stack.Screen name="CadastrarEmps" component={CadastrarEmps} />
      <Stack.Screen name="CadastrarMaqs" component={CadastrarMaqs} />
          <Stack.Screen name="pesquisarMaqs" component={pesquisarMaqs} />
        <Stack.Screen name="PesquisarEmps" component={PesquisarEmps} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
  
    
    </Stack.Navigator>
  );
};

export default StackRoutes;
