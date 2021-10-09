
   主要讲述通过navigation知识，从无到有的配置一个app软件路由，基本满足了一般app开发中的路由配置。其中主要包括5个方法和两个高阶组件

## 路由方法：
 1. createStackNavigator(RouteConfigs, StackNavigatorConfig)：为您的应用程序提供了一种在屏幕之间转换的方法，其中每个新屏幕都位于堆栈的顶部。
 2. createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);SwitchNavigator的目的是每次只显示一个屏幕。默认情况下，它不会处理回退操作，并且当您切换到默认状态时，它会重置路由。这正是我们希望从身份验证流中得到的行为。
 3. createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);提供侧边导航
 4. createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);屏幕底部的一个简单的标签栏，可以让你在不同的路线之间切换。路由是惰性初始化的——它们的屏幕组件在首次聚焦之前不会被挂载。
 5. createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);屏幕顶部的一个以材料设计为主题的标签栏，可以让你通过点击路线或水平滑动来切换不同的路线。默认情况下，转换是动态的。每个路由的屏幕组件立即加载。

## 高阶组件：
 1. withNavigation(Component) returns a Component. 当您不能直接将导航道具传递到组件中，或者不想在深度嵌套的子组件中传递它时，它非常有用。
 2. withNavigationFocus(Component) returns a component.如果您需要在屏幕组件的呈现函数中使用焦点状态，或者在屏幕内部的某个地方呈现另一个组件，那么这是非常有用的。
