import { typeHexColors } from "@/common/colors"
import { PokemonType, ValueWrapper } from "@/common/models"

export default function PokemonTypeDisplay({
  value,
}: ValueWrapper<PokemonType>) {
  return (
    <div
      className="bg-dark outline-2 text-center outline"
      style={{ color: `#${typeHexColors[value]}` }}
    >
      {value.toUpperCase()}
    </div>
  )
}
