import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

export default () => {
    return (
        <Drawer
        drawerContent={()=>(
            <DrawerContentScrollView>
                <DrawerItem
                label='drawer'
                />
            </DrawerContentScrollView>
        )}
        />
    )
}