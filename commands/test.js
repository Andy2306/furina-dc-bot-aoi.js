module.exports = ({
    name: "testdb",
    code:`
    isi variable $getUserVar[test]
    $setUserVar[test;$random[1;100]]
    `
})