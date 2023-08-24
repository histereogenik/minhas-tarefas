import { useDispatch } from 'react-redux'

import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ ativo, contador, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
