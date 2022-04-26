import Api from "../api/Api";

class SkillService{
    getSkills(){
        return Api.get("/SKILLS");
    }
    addSkills(Skill){
        return Api.post("/SKILLS",Skill);
    }
    deleteSkill(id){
        return Api.delete("/SKILLS"+id);
    }
}

export default new SkillService();