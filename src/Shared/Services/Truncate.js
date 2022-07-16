const truncateText = (str, size) => {
    return str.length > size ? str.slice(0, size - 1) + "…" : str;
}

export default  truncateText