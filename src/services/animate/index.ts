import { Animated, Easing } from 'react-native';

type AnimateProps = {
    val: number
    finish?(): void
    delay: number
    ref: Animated.Value
}

type RunProps = {
    finish(): void
    ref: Animated.Value
    config: ConfigProps
}

type ConfigProps = {
    toValue: number
    duration: number
    useNativeDriver: boolean
    easing?(val: number): number
}

export function Animate() {

    function run({ ref, config, finish }: RunProps) {
        Animated.timing(ref,
            config
        ).start(finish.bind(this));
    }

    function Simple({ val, ref, delay, finish = () => null }: AnimateProps) {
        const config = {
            toValue: val,
            duration: delay,
            useNativeDriver: false,
        }
        run({ ref, config, finish });
    }

    function Smooth({ val, ref, delay, finish = () => null }: AnimateProps) {
        const config = {
            toValue: val,
            duration: delay,
            useNativeDriver: false,
            easing: Easing.out(Easing.exp)
        }
        run({ ref, config, finish });
    }

    return {
        Simple,
        Smooth
    }
}