import Api from "../api/Api";

class ExperienceService{
    getExperiences(){
        return Api.get("/EXPERIENCE");
    }
    addExperience(Experience){
        return Api.post("/EXPERIENCE",Experience);
    }
    deleteExperience(id){
        return Api.delete("/EXPERIENCE"+id);
    }
}

export default new ExperienceService();