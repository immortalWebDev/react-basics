import Child from "./Child";

const Parent = () => {
  return <Child name="Piyush" job="WebDev" />;
};

export default Parent;

/*
Here the prop data is being sent from parent => child  => grandchild => greatgrandchild

though we only need to sent data from parent to greatgrandchild

thats bad that middle 2 components unnncessary had to carry the data props, its called prop drill

and we cannot directly pass parent => greatgrandchild skipping the 2 middle components, though its technically possible

react will not throw errors for that but it will break the component hierarchy and that will break the structure of whole
app and distort whole UI


*/
