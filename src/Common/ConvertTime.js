 export default function ConvertTime(time) {
        const dateObj = new Date(time);
        const simpleTime = dateObj.toLocaleString('en-US');
        return simpleTime
    }