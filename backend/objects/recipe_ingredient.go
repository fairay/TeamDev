package objects

import "encoding/json"

type RecipeIngredient struct {
	Recipe_id     int    `json:"recipe" gorm:"UNIQUE_INDEX:riindex"`
	Ingredient_id string `json:"item" gorm:"UNIQUE_INDEX:riindex"`
	Amount        string `json:"amount"`
}

func (obj *RecipeIngredient) ToDTO() *IngredientDTO {
	dto := new(IngredientDTO)
	jsonStr, _ := json.Marshal(obj)
	json.Unmarshal(jsonStr, dto)

	dto.Title = obj.Ingredient_id
	return dto
}
func (RecipeIngredient) ArrToDTO(src []RecipeIngredient) []IngredientDTO {
	dst := make([]IngredientDTO, len(src))
	for k, v := range src {
		dst[k] = *v.ToDTO()
	}
	return dst
}
