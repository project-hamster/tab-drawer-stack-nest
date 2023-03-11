import { Tabs } from "expo-router";

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
            name='(drawer)'
            options={{
                headerShown:false,
                tabBarLabel:'tab1'
            }}
            />
            <Tabs.Screen
            name='tab2'
            />
        </Tabs>
    )
}