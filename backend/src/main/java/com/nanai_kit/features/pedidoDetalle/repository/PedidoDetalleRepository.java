package com.nanai_kit.features.pedidoDetalle.repository;

import com.nanai_kit.features.pedidoDetalle.model.PedidoDetalle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoDetalleRepository extends JpaRepository<PedidoDetalle, Long> {
}
