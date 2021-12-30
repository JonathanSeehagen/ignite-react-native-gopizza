import React from "react";

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypeProps,
} from './styles';

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  status: StatusTypeProps;
  table_number: string;
  quantity: string;
}

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
}

export function OrderCard({ index, data, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: data.image }} />

      <Name>4 Queijos</Name>

      <Description>
        Mesa {data.table_number} - Qtd: {data.quantity}
      </Description>

      <StatusContainer status={data.status}>
        <StatusLabel status={data.status}>{data.status}</StatusLabel>
      </StatusContainer>
    </Container>
  )
}