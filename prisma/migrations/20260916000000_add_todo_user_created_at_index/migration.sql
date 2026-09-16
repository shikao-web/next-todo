-- Supports Todo list lookups filtered by user and ordered by creation time.
CREATE INDEX "Todo_userId_createdAt_id_idx" ON "Todo"("userId", "createdAt", "id");
