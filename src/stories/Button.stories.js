import {Button as Template} from './Button';

export default {
    title: 'Button',
    component: Template,
}

export const Primary = {
    args: {
        primary: true,
        text: 'Primary'
    },
};

export const Secondary = {
    args: {
        primary: false,
        text: 'Secondary'
    }
} 