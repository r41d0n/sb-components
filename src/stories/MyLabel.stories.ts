import type {Meta, StoryObj} from '@storybook/react';
import {MyLabel} from '../components/MyLabel';

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {control: 'inline-radio'},
        color: {control: 'inline-radio'},
        fontColor: {control: 'color'}
    }
} satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic label',
        size: 'h1'
    }
};
export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true
    }
};
export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};
export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#fa2396'
    }
};