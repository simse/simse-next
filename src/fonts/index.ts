import localFont from 'next/font/local';

const adobeTextProFont = localFont({
    src: [
        {
            path: '../fonts/AdobeTextPro-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/AdobeTextPro-Bold.woff',
            weight: '700',
            style: 'normal',
        }
    ]
})

const national2Font = localFont({
    src: [
        {
            path: './National2-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: './National2-ThinItalic.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: './National2-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: './National2-ExtraLightItalic.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: './National2-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './National2-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: './National2-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './National2-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './National2-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './National2-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        /*{
            path: './National2-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './National2-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic',
        },*/
        {
            path: './National2-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './National2-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: './National2-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './National2-ExtraBoldItalic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: './National2-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './National2-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ]
})

const feijoaFont = localFont({
    src: [
        {
            path: './Feijoa-Display.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Feijoa-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Feijoa-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Feijoa-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
    ]
})

export {
    adobeTextProFont,
    national2Font,
    feijoaFont
}