export function isEmpty(item) {
    if (item === null || item === undefined) {
        return true;
    } else if (Array.isArray(item)) {
        return item.length === 0;
    } else if (typeof item === 'string' || item instanceof String) {
        return item.trim().length === 0;
    } else if (typeof item === 'object' && Object.keys(item).length === 0) {
        return true;
    } else if (typeof item === 'number' && isNaN(item)) {
        return true;
    } else {
        return false;
    }
}
