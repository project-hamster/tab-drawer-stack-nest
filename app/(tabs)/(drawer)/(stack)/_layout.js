import { Stack } from "expo-router";

export default () => {
    return (
        <Stack 
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen
            name="stack2"
            options={{
                presentation:'modal'
            }}
            />
        </Stack>
    )
}