import Icon from 'react-native-vector-icons/MaterialIcons'


export default function BAIcon({ name, size, color }: any) {
    return <>
        <Icon name={name} size={size ?? 30} color={color ?? "black"} />
    </>
}