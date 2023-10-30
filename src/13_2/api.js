const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need",
            { count: studentsCount });
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com");
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com");
    }
}