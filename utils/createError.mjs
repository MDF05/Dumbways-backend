const createErr = (status = 404, message = "page not found") => {
    const Err = new Error()
    Err.status = status
    Err.message = message

    return Err
}

export default createErr
