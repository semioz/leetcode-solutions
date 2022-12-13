function without(inp_data, ..._arg) {
    return inp_data.filter(el => !(_arg.includes(el)))
};

export default without;